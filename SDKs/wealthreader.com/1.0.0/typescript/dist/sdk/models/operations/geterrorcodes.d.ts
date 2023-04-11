import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Idioma de la respuesta
 */
export declare enum GetErrorCodesLangEnum {
    Es = "es",
    En = "en"
}
export declare class GetErrorCodesRequest extends SpeakeasyBase {
    /**
     * Idioma de la respuesta
     */
    lang?: GetErrorCodesLangEnum;
}
export declare class GetErrorCodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Códigos de error junto con su descripción, posible motivo y cómo proceder
     */
    errorCodes?: shared.ErrorCodes[];
    /**
     * error
     */
    errors?: shared.ErrorT[];
}
