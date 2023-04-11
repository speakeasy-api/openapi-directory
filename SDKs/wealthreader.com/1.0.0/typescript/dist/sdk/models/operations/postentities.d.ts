import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Tipo de documento, requerido según la entidad. Si es requerido o no, está indicado en el listado de entidades. Ver definición.
 */
export declare enum PostEntitiesRequestBodyDocumentTypeEnum {
    Nif = "NIF",
    Pasaporte = "Pasaporte",
    TarjetaDeResidencia = "Tarjeta de residencia"
}
export declare class PostEntitiesRequestBody extends SpeakeasyBase {
    /**
     * Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación, si el tipo de desafío es OTP. Requiere la clave que la entidad le ha enviado al usario final
     */
    otp?: string;
    /**
     * Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación. Requiere el valor de SESSION obtenido en la primera petición
     */
    session?: string;
    /**
     * Identifica al cliente en el servicio
     */
    apiKey?: string;
    /**
     * Nombre de la entidad. El listado completo está disponible con GET
     */
    code?: string;
    /**
     * Solo necesario cuando el usuario puede acceder a más de un contrato. El listado de contratos disponibles se obtiene al realizar una conexión con un usuario con opción a trabajar con varios contratos en su entidad (que al hacer login en su banca online ve como primera opción una pantalla de selección de contratos) y cuya llamada a la API no se le ha especificado un valor a contract_code
     */
    contractCode?: string;
    /**
     * Tipo de documento, requerido según la entidad. Si es requerido o no, está indicado en el listado de entidades. Ver definición.
     */
    documentType?: PostEntitiesRequestBodyDocumentTypeEnum;
    /**
     * Contraseña
     */
    password?: string;
    /**
     * Segunda contraseña, requerida según la entidad.
     */
    secondPassword?: string;
    /**
     * Valor para credenciales custodiadas, tokenizadas previamente mediante una llamada a este método con el valor de tokenize=true. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login
     */
    token?: string;
    /**
     * Indica si Wealth Reader debe custodiar los credenciales, de tal manera que incluído en el body de respuesta estará un token que permite conectar con la entidad sin necesidad de conocer los credenciales: document_type, user, password, second_password, contract_code
     */
    tokenize?: boolean;
    /**
     * Usuario. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login
     */
    user?: string;
}
export declare class PostEntities200ApplicationJson4Payload extends SpeakeasyBase {
    /**
     * Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
     */
    accounts?: Record<string, any>[];
    /**
     * Tarjetas de crédito, débito y prepago
     */
    cards?: Record<string, any>[];
    /**
     * Carteras de acciones, fondos y planes de pensiones
     */
    portfolios?: Record<string, any>[];
    /**
     * Activos inmobiliarios
     */
    properties?: shared.Properties;
    /**
     * Información relativa a la persona que hace login
     */
    userInformation?: shared.UserInformation;
}
export declare class PostEntities200ApplicationJson4 extends SpeakeasyBase {
    payload?: PostEntities200ApplicationJson4Payload;
    properties?: any[];
    statistics: shared.Statistics;
    success: boolean;
}
export declare class PostEntities200ApplicationJson3Payload extends SpeakeasyBase {
    /**
     * Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
     */
    accounts?: Record<string, any>[];
    /**
     * Tarjetas de crédito, débito y prepago
     */
    cards?: Record<string, any>[];
    /**
     * Carteras de acciones, fondos y planes de pensiones
     */
    portfolios?: Record<string, any>[];
    /**
     * Activos inmobiliarios
     */
    properties?: shared.Properties;
    /**
     * Información relativa a la persona que hace login
     */
    userInformation?: shared.UserInformation;
}
export declare class PostEntities200ApplicationJson3 extends SpeakeasyBase {
    cards?: any[];
    payload?: PostEntities200ApplicationJson3Payload;
    statistics: shared.Statistics;
    success: boolean;
}
export declare class PostEntities200ApplicationJson2Payload extends SpeakeasyBase {
    /**
     * Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
     */
    accounts?: Record<string, any>[];
    /**
     * Tarjetas de crédito, débito y prepago
     */
    cards?: Record<string, any>[];
    /**
     * Carteras de acciones, fondos y planes de pensiones
     */
    portfolios?: Record<string, any>[];
    /**
     * Activos inmobiliarios
     */
    properties?: shared.Properties;
    /**
     * Información relativa a la persona que hace login
     */
    userInformation?: shared.UserInformation;
}
export declare class PostEntities200ApplicationJson2 extends SpeakeasyBase {
    accounts?: any[];
    payload?: PostEntities200ApplicationJson2Payload;
    statistics: shared.Statistics;
    success: boolean;
}
export declare class PostEntities200ApplicationJson1Payload extends SpeakeasyBase {
    /**
     * Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
     */
    accounts?: Record<string, any>[];
    /**
     * Tarjetas de crédito, débito y prepago
     */
    cards?: Record<string, any>[];
    /**
     * Carteras de acciones, fondos y planes de pensiones
     */
    portfolios?: Record<string, any>[];
    /**
     * Activos inmobiliarios
     */
    properties?: shared.Properties;
    /**
     * Información relativa a la persona que hace login
     */
    userInformation?: shared.UserInformation;
}
export declare class PostEntities200ApplicationJson1 extends SpeakeasyBase {
    payload?: PostEntities200ApplicationJson1Payload;
    portfolios?: any[];
    statistics: shared.Statistics;
    success: boolean;
}
export declare class PostEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * datos obtenidos de la entidad
     */
    entityData?: any[];
    /**
     * error
     */
    errors?: shared.ErrorT[];
}
