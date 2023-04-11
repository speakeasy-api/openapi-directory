import { SpeakeasyBase } from "../../../internal/utils";
export declare class PropertiesHistoricPrices extends SpeakeasyBase {
    date?: Date;
    price?: number;
}
/**
 * Activos inmobiliarios
 */
export declare class Properties extends SpeakeasyBase {
    /**
     * Referencia catastral
     */
    code: string;
    currency: string;
    description?: string;
    historicPrices: PropertiesHistoricPrices[];
    purpose?: string;
    tradingPrice: number;
    tradingYear: number;
    uuid: string;
}
