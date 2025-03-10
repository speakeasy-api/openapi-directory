<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes
{
    /**
     * Quantity of an item that is available to be allocated to orders
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty $availToSellQty
     */
	#[\JMS\Serializer\Annotation\SerializedName('availToSellQty')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty $availToSellQty = null;
    
    /**
     * Quantity of an item that is input by the seller
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty $inputQty
     */
	#[\JMS\Serializer\Annotation\SerializedName('inputQty')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty $inputQty = null;
    
    /**
     * Quantity that has been ordered by the customers but not yet shipped
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQty $reservedQty
     */
	#[\JMS\Serializer\Annotation\SerializedName('reservedQty')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQty')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesReservedQty $reservedQty = null;
    
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     * 
     * @var ?string $shipNode
     */
	#[\JMS\Serializer\Annotation\SerializedName('shipNode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $shipNode = null;
    
	public function __construct()
	{
		$this->availToSellQty = null;
		$this->inputQty = null;
		$this->reservedQty = null;
		$this->shipNode = null;
	}
}
