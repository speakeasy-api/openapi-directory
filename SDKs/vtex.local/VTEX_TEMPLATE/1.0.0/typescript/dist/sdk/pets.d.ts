import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a pet
     */
    createPets(config?: AxiosRequestConfig): Promise<operations.CreatePetsResponse>;
    /**
     * List all pets
     */
    listPets(req: operations.ListPetsRequest, config?: AxiosRequestConfig): Promise<operations.ListPetsResponse>;
    /**
     * Info for a specific pet
     */
    showPetById(req: operations.ShowPetByIdRequest, config?: AxiosRequestConfig): Promise<operations.ShowPetByIdResponse>;
}
