import Client from "../models/ClientSchema.js";

export const updateClient = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedClient = await Client.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedClient,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteClient = async (req, res) => {
    const id = req.params.id;

    try {
        await Client.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully Deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Delete" });
    }
};

export const getSingleClient = async (req, res) => {
    const id = req.params.id;

    try {
        const client = await Client.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Business Found",
            data: client,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "No Business found" });
    }
};

export const getAllClient = async (req, res) => {
    try {
        const clients = await Client.find({}).select("-password");

        res.status(200).json({
            success: true,
            message: "Business Found",
            data: clients,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};
