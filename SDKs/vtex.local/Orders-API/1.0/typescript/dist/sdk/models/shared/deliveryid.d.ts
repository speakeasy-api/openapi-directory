import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about delivery IDs.
 */
export declare class DeliveryId extends SpeakeasyBase {
    /**
     * Name of the account's [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).
     */
    accountCarrierName: string;
    /**
     * [Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)'s ID.
     */
    courierId: string;
    /**
     * Carrier's name.
     */
    courierName: string;
    /**
     * ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
     */
    dockId: string;
    /**
     * Information about [kits](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28), if there are any.
     */
    kitItemDetails: any[];
    /**
     * Quantity of items.
     */
    quantity: number;
    /**
     * ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb).
     */
    warehouseId: string;
}
