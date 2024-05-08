import React from 'react';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

class Efficiency extends React.Component {
    state = {
        selectedOption: '',
        numberOfQuantumWell: '',
        sComposition: '',
        ngd: 12, // Default value for NGD
        wgd: '',
        result: {},
        calculationDone: false,
        loading: false,
        error: null
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, error: null });
        
        const formData = {
            "QW": parseFloat(this.state.numberOfQuantumWell),
            "S_Comp": parseFloat(this.state.sComposition),
            "NGD": parseFloat(this.state.ngd),
            "WGD": parseFloat(this.state.wgd)
        };

        const url = this.state.selectedOption === 'G-Dana' 
            ? 'https://major-g-dana.onrender.com/predict/g-dana'
            : 'https://major-g-dana.onrender.com/predict/t-dana';

        try {
            const response = await axios.post(url, formData);
            const [ISC, JSC, VOC, FF, Efficiency] = response.data.efficiency;
            const result = { ISC, JSC, VOC, FF, Efficiency };
            this.setState({ result, calculationDone: true, loading: false });
        } catch (error) {
            console.error("API Error:", error);
            this.setState({ error: "An error occurred. Please try again later.", loading: false });
        }
    }

    render() {
        const { result, calculationDone, loading, error, selectedOption, ngd } = this.state;
        const isGaussian = selectedOption === 'G-Dana';
        const ngdLabel = isGaussian ? 'NGD (10<sup>12</sup> - 10<sup>19</sup>)' : 'NTD (10<sup>12</sup> - 10<sup>19</sup>)';

        return (
            <div className="container mx-auto px-4">
                <h2 className="text-center text-headingColor text-4xl font-bold my-8">
                    Welcome to Solar Cell Efficiency Calculator 🌞
                </h2>
                
                <form onSubmit={this.handleSubmit} className="max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                    <select 
                        name="selectedOption" 
                        value={this.state.selectedOption} 
                        onChange={this.handleChange} 
                        className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                        style={{ marginBottom: '10px' }}>
                        <option value="">Select The type of Distribution</option>
                        <option value="G-Dana">Gaussian Distribution</option>
                        <option value="T-Dana">Tail Distribution</option>
                    </select>
                    <input 
                        type="text" 
                        name="numberOfQuantumWell" 
                        value={this.state.numberOfQuantumWell} 
                        placeholder="Number of Quantum Well (1-100)" 
                        onChange={this.handleChange} 
                        className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                        style={{ marginBottom: '10px' }} 
                    />
                    <input 
                        type="text" 
                        name="sComposition" 
                        value={this.state.sComposition} 
                        placeholder="S/Se Composition (0 - 1.0)" 
                        onChange={this.handleChange} 
                        className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                        style={{ marginBottom: '10px' }} 
                    />
                    <div className="flex items-center">
                        <input 
                            type="range" 
                            name="ngd" 
                            min="12" 
                            max="19" 
                            step="1" 
                            value={ngd} 
                            onChange={this.handleChange} 
                            className="flex-grow px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                            style={{ marginBottom: '10px' }} 
                        />
                        <span className="text-headingColor text-[22px] leading-7 ml-4">10<sup>{ngd}</sup></span>
                    </div>
                    <label htmlFor="ngd" dangerouslySetInnerHTML={{ __html: ngdLabel }}></label>
                    <input 
                        type="text" 
                        name="wgd" 
                        value={this.state.wgd} 
                        placeholder="Width of gaussian defect (WGD)" 
                        onChange={this.handleChange} 
                        className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                        style={{ marginBottom: '10px' }} 
                    />
                    <button disabled={loading} type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                        {loading ? <HashLoader size={35} color="#ffffff" /> : 'Calculate'}
                    </button>
                </form>
                
                {/* Error message */}
                {error && <p className="text-center text-red-500">{error}</p>}
                
                {/* Result display */}
                {calculationDone && Object.keys(result).length > 0 &&
                    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                        <h2 className="text-headingColor text-[22px] leading-9 font-bold mb-5">Result</h2>
                        <p>ISC: {result.ISC}</p>
                        <p>JSC: {result.JSC}</p>
                        <p>VOC: {result.VOC}</p>
                        <p>FF: {result.FF}</p>
                        <p>Efficiency: {result.Efficiency}</p>
                        <h2 className="text-green-500">Results have been calculated perfectly.</h2>
                    </div>
                }
            </div>
        );
    }
}

export default Efficiency;
