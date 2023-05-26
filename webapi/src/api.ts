import axios from "axios";
import fs from "fs";
import "dotenv/config";

const { ACCESS_TOKEN } = process.env;

const config = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    }
}

export const uploadFile = async (fileName: string, dir: string) => {
    const data = fs.readFileSync(`./${fileName}`);

    const response = await axios.post("https://content.dropboxapi.com/2/files/upload",
        data,
        {
            headers: {
                "Dropbox-API-Arg": JSON.stringify({
                    path: `${dir}/${fileName}`,
                    mode: "add",
                }),
                Authorization: `Bearer ${ACCESS_TOKEN}`,

                "Content-Type": "application/octet-stream",
            }
        },
    ).catch((err: any) => {
        throw err;
    });
    return response.data;
};

export const getFileMetaData = async (fileName: string, dir: string) => {
    const response = await axios.post("https://api.dropboxapi.com/2/files/get_metadata",
        { "path": `${dir}/${fileName}` }, config
    ).catch((err: any) => {
        throw err;
    });
    return response.data;
}
export const getFileMetaDataById = async (fileId: string) => {
    const response = await axios.post("https://api.dropboxapi.com/2/files/get_metadata",
        { "path": fileId }, config
    ).catch((err: any) => {
        throw err;
    });
    return response.data;
}

function isLookupError(error) {
    console.log(error)
    return (
        error.hasOwnProperty('error_summary') &&
        error.error_summary.includes('path/not_found')
    );
}

export const isFileExists = async (fileName: string, dir: string) => {
    try {
        const response = await axios.post("https://api.dropboxapi.com/2/files/get_metadata",
            { "path": `${dir}/${fileName}` }, config);
        const data = response.data;

        if (response.status === 200 && data.hasOwnProperty('id')) {
            return true; // File exists
        } else if (response.status === 409 && isLookupError(data.error)) {
            return false; // LookupError, file does not exist
        } else {
            throw new Error('Error occurred during API call');
        }
    } catch (error) {
        if (error.response && error.response.status === 409) {
            return false;
        } else {
            throw new Error('Error occurred during API call');
        }
    }
}

export const getFileSize = async (fileName: string, dir: string) => {
    const data = await getFileMetaData(fileName, dir).catch((err: any) => {
        throw err;
    });
    return data.size;
};

export const deleteFile = async (fileName: string, dir: string) => {
    const response = await axios.post("https://api.dropboxapi.com/2/files/delete_v2",
        { path: `${dir}/${fileName}` }, config
    ).catch((err: any) => {
        throw err;
    });
    return response.data;
};