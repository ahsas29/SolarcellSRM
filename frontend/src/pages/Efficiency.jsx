import React from 'react';
import axios from 'axios';

class Efficiency extends React.Component {
    state = {
        selectedOption: '',
        numberOfQuantumWell: '',
        sComposition: '',
        ngd: '',
        wgd: '',
        result: {}, // New state to store the API response
        calculationDone: false // State to track if calculation is done
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
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
            this.setState({ result, calculationDone: true });
        } catch (error) {
            console.error("API Error:", error);
            // You can handle errors here
        }
    }

    render() {
        const { result, calculationDone } = this.state;
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="px-5 lg:px-0">
                    <h2 className="text-center text-headingColor text-[28px] leading-9 font-bold mb-5">
                        Hello! <span className="text-primaryColor">Please Enter The</span> Values
                    </h2>
                    <form onSubmit={this.handleSubmit} className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                        <select name="selectedOption" value={this.state.selectedOption} onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }}>
                            <option value="">Select...</option>
                            <option value="G-Dana">G-Dana</option>
                            <option value="T-Dana">T-Dana</option>
                        </select>
                        <input type="text" name="numberOfQuantumWell" value={this.state.numberOfQuantumWell} placeholder="Number of Quantum Well" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                        <input type="text" name="sComposition" value={this.state.sComposition} placeholder="S Composition" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                        <input type="text" name="ngd" value={this.state.ngd} placeholder="NGD" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                        <input type="text" name="wgd" value={this.state.wgd} placeholder="WGD" onChange={this.handleChange} className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" style={{ marginBottom: '10px' }} />
                        <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3" style={{ marginBottom: '10px' }}>Submit</button>
                    </form>
                    {/* Displaying result */}
                    {calculationDone && Object.keys(result).length > 0 &&
                        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                            <h2 className="text-headingColor text-[22px] leading-9 font-bold mb-5">Result</h2>
                            <p>ISC: {result.ISC}</p>
                            <p>JSC: {result.JSC}</p>
                            <p>VOC: {result.VOC}</p>
                            <p>FF: {result.FF}</p>
                            <p>Efficiency: {result.Efficiency}</p>
                            <p className="text-green-500">Results have been calculated perfectly.</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Efficiency;
