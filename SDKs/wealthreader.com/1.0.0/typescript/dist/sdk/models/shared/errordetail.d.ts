import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorDetail extends SpeakeasyBase {
    /**
     * El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.
     */
    code: number;
    /**
     * Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)
     */
    contracts?: Record<string, any>[];
    /**
     * Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error
     */
    message: string;
}
