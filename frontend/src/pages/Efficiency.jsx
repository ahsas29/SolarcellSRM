import React from 'react';
import axios from 'axios';

class Efficiency extends React.Component {
    state = {
        selectedOption: '',
        numberOfQuantumWell: '',
        sComposition: '',
        ngd: '',
        wgd: '',
        result: {} // New state to store the API response
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
            this.setState({ result });
        } catch (error) {
            console.error("API Error:", error);
            // You can handle errors here
        }
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                    <select name="selectedOption" value={this.state.selectedOption} onChange={this.handleChange} style={{ marginBottom: '10px' }}>
                        <option value="">Select...</option>
                        <option value="G-Dana">G-Dana</option>
                        <option value="T-Dana">T-Dana</option>
                    </select>
                    <input type="text" name="numberOfQuantumWell" value={this.state.numberOfQuantumWell} placeholder="Number of Quantum Well" onChange={this.handleChange} style={{ marginBottom: '10px' }} />
                    <input type="text" name="sComposition" value={this.state.sComposition} placeholder="S Composition" onChange={this.handleChange} style={{ marginBottom: '10px' }} />
                    <input type="text" name="ngd" value={this.state.ngd} placeholder="NGD" onChange={this.handleChange} style={{ marginBottom: '10px' }} />
                    <input type="text" name="wgd" value={this.state.wgd} placeholder="WGD" onChange={this.handleChange} style={{ marginBottom: '10px' }} />
                    <button type="submit" style={{ marginBottom: '10px' }}>Submit</button>
                </form>
                {/* Displaying result */}
                {result && Object.keys(result).length > 0 &&
                    <div>
                        <h2>Result</h2>
                        <p>ISC: {result.ISC}</p>
                        <p>JSC: {result.JSC}</p>
                        <p>VOC: {result.VOC}</p>
                        <p>FF: {result.FF}</p>
                        <p>Efficiency: {result.Efficiency}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Efficiency;
