import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorCodes extends SpeakeasyBase {
    /**
     * Código de error
     */
    code?: number;
    /**
     * Descripción del error
     */
    description?: string;
    /**
     * Cómo actuar cuando se obtiene este código de error
     */
    howToProceed?: string;
    /**
     * Posibles causas del error
     */
    possibleReasons?: string;
}
