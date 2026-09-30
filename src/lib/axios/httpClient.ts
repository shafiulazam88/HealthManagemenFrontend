
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if(!API_BASE_URL){
    throw new Error("API_BASE_URL is not defined in the environment variables.");
}

const axiosInstance =()=>{
    const instance = axios.create({
        baseURL: API_BASE_URL,
        timeout: 30000, // Set a timeout of 10 seconds
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return instance;
}  

export interface ApiRequestOption{
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
}

const httpGet= async(endpoint: string, options?: ApiRequestOption) => {

    try {
        const response = await axiosInstance().get(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        console.error(`GET request to ${endpoint} failed:`, error);
        throw error;
    }
}

const httpPost= async(endpoint: string, options?: ApiRequestOption) => {

    try {
        const response = await axiosInstance().post(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        console.error(`GET request to ${endpoint} failed:`, error);
        throw error;
    }
}

const httpPut= async(endpoint: string, options?: ApiRequestOption) => {

    try {
        const response = await axiosInstance().put(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        console.error(`GET request to ${endpoint} failed:`, error);
        throw error;
    }
}

const httpDelete= async(endpoint: string, options?: ApiRequestOption) => {

    try {
        const response = await axiosInstance().delete(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        console.error(`GET request to ${endpoint} failed:`, error);
        throw error;
    }
}

const httpPatch= async(endpoint: string, options?: ApiRequestOption) => {

    try {
        const response = await axiosInstance().patch(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        console.error(`GET request to ${endpoint} failed:`, error);
        throw error;
    }
}

export const httpClient={
    get:httpGet,
    post:httpPost,
    put:httpPut,
    delete:httpDelete,
    patch:httpPatch
 
}