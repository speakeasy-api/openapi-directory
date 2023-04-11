import { EntityData } from "./entitydata";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://virtserver.swaggerhub.com/Wealth-Reader/api/1.0.0", "https://api.wealthreader.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Las APIs regulatorias basadas en PSD2 proporcionan acceso a cierta información financiera como saldos de cuentas bancarias y transacciones. Sin embargo, hay otras fuentes de información patrimonial que no son accesibles por estas APIs. La API de Wealth Reader amplía la información ofrecida por las APIs regulatorias proporcionando acceso en tiempo real a las fuentes patrimoniales adicionales en cualquier entidad del mundo. Existen otros dos documentos relacionados que te ayudarán a integrar la API de Wealth Reader. Uno es la guía de integración del widget Javascript: https://docs-es.wealthreader.com/, y el  otro una colección Postman basada en esta documentación.
 *
 * @see {@link https://docs-es.wealthreader.com/}
 */
export declare class SDK {
    /**
     * Métodos utilizados para recuperar información de las entidades
     */
    entityData: EntityData;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
