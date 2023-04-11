import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Métodos utilizados para recuperar información de las entidades
 */
export declare class EntityData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Obtiene el listado de entidades soportadas
     *
     * @remarks
     * Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.
     *
     */
    getEntities(config?: AxiosRequestConfig): Promise<operations.GetEntitiesResponse>;
    /**
     * Listado de códigos de error
     *
     * @remarks
     * Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.
     *
     */
    getErrorCodes(req: operations.GetErrorCodesRequest, config?: AxiosRequestConfig): Promise<operations.GetErrorCodesResponse>;
    /**
     * Obtiene los activos financieros y el detalle de su composición
     *
     * @remarks
     * Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.
     *
     */
    postEntities(req: operations.PostEntitiesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostEntitiesResponse>;
}
