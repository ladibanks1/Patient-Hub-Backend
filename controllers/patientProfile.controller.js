import patientService from "../services/patientProfile.service.js";
import ErrorMessage from "../utils/errorMessage.js";

const profile = async (req , res , next) => {
    try {
        const {id} = req.params;
        const patientDetails = await patientService.profile(id)
        res.status(200).json({
            data: patientDetails,
            message: "Document Found"
        })
    } catch (error) {
        const message = error.message;
        const statusCode = error?.statusCode || 404
        const err = new ErrorMessage(message , statusCode)
        next(err)
    }
}

const updateProfile = async (req , res , next) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const updatedDetails = await patientService.updateProfile(id , data)
        res.status(200).json({
            data: updatedDetails,
            message: "Document Updated Successfully"
        })
    } catch (error) {
        const message = error.message;
        const statusCode = error?.statusCode || 404
        const err = new ErrorMessage(message , statusCode)
        next(err)
    }
}

const deleteProfile = async (req , res , next) => {
    try {
        const {id} = req.params;
        const deletedDetails = await patientService.deleteProfile(id)
        res.status(200).json({
            data: deletedDetails,
            message: "Document Deleted Successfully"
        })
    } catch (error) {
        const message = error.message;
        const statusCode = error?.statusCode || 404
        const err = new ErrorMessage(message , statusCode)
        next(err)
    }
}

export default {profile , updateProfile , deleteProfile}