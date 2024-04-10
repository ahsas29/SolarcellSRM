import React from 'react';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

class Efficiency extends React.Component {
    state = {
        selectedOption: '',
        numberOfQuantumWell: '',
        sComposition: '',
        ngd: '',
        wgd: '',
        result: {}, // New state to store the API response
        calculationDone: false, // State to track if calculation is done
        loading: false, // State to track loading state
        error: null // State to track error
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, error: null }); // Set loading to true when the request starts
        
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
            console.log("API Response:", response.data);

            // Parsing response and assigning values
            const [ISC, JSC, VOC, FF, Efficiency] = response.data.efficiency;
            const result = { ISC, JSC, VOC, FF, Efficiency };
            this.setState({ result, calculationDone: true, loading: false });
        } catch (error) {
            console.error("API Error:", error);
            // Set error state if there's an error
            this.setState({ error: "An error occurred. Please try again later.", loading: false });
        }
    }

    render() {
        const { result, calculationDone, loading, error } = this.state;
        return (
            <div className="container mx-auto px-4">
                <h2 className="text-center text-headingColor text-4xl font-bold my-8">
                    Welcome to Solar Cell Efficiency Calculator 🌞
                </h2>
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="mb-4">
                        <h3 className="font-bold mb-2 text-center">1. Gaussian Distribution:</h3>
                        <p className="text-center">A statistical distribution characterized by a bell-shaped curve.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold mb-2 text-center">2. Tail Distribution:</h3>
                        <p className="text-center">A type of probability distribution that has a longer tail at one end than the other.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold mb-2 text-center">3. Quantum Well:</h3>
                        <p className="text-center">The potential well for the motion of an electron in a semiconductor crystal, which is quantized.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold mb-2 text-center">4. S-Composition:</h3>
                        <p className="text-center">The composition ratio of sulfur in the material.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold mb-2 text-center">5. Total Density of Acceptor-like & Donor-like States for Gaussian Distribution (NGD):</h3>
                        <p className="text-center">The combined density of acceptor-like and donor-like states for Gaussian distribution.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-bold mb-2 text-center">6. Characteristics of Decay Energy (WGD):</h3>
                        <p className="text-center">The properties of decay energy, which determine the decay behavior of a system.</p>
                    </div>
                </div>
                <h2 className="text-center text-headingColor text-4xl font-bold my-8">
                    Enter your desired values 🌞
                </h2>

                <form onSubmit={this.handleSubmit} className="max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                    <select name="selectedOption" value={this.state.selectedOption} onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }}>
                        <option value="">Select The type of Distribution</option>
                        <option value="G-Dana">Gaussian Distribution</option>
                        <option value="T-Dana">Tail Distribution</option>
                    </select>
                    <input type="text" name="numberOfQuantumWell" value={this.state.numberOfQuantumWell} placeholder="Number of Quantum Well (1-100)" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                    <input type="text" name="sComposition" value={this.state.sComposition} placeholder="S Composition (0.2, 0.4, 0.6, 0.8)" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                    <input type="text" name="ngd" value={this.state.ngd} placeholder="N type gaussian defect (NGD)" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                    <input type="text" name="wgd" value={this.state.wgd} placeholder="Width of gaussian defect (WGD)" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                    <button disabled={loading} type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                        {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
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
