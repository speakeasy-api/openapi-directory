import { SpeakeasyBase } from "../../../internal/utils";
export declare class Statistics extends SpeakeasyBase {
    /**
     * Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte
     */
    session: string;
    /**
     * Duración de la ejecución
     */
    executionTime: number;
    /**
     * El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/
     */
    operationId?: string;
    /**
     * El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true
     */
    token?: string;
}
