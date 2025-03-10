<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class LogisticsInfo
{
    /**
     * Address ID.
     * 
     * @var string $addressId
     */
	#[\JMS\Serializer\Annotation\SerializedName('addressId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $addressId;
    
    /**
     * Delivery channel.
     * 
     * @var string $deliveryChannel
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryChannel')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $deliveryChannel;
    
    /**
     * Delivery company.
     * 
     * @var string $deliveryCompany
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryCompany')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $deliveryCompany;
    
    /**
     * Array of delivery IDs.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\DeliveryId> $deliveryIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryIds')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\DeliveryId>')]
    public array $deliveryIds;
    
    /**
     * Delivery window information.
     * 
     * @var string $deliveryWindow
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryWindow')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $deliveryWindow;
    
    /**
     * Item index, matching the index in the `items` array.
     * 
     * @var int $itemIndex
     */
	#[\JMS\Serializer\Annotation\SerializedName('itemIndex')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $itemIndex;
    
    /**
     * List price in cents.
     * 
     * @var int $listPrice
     */
	#[\JMS\Serializer\Annotation\SerializedName('listPrice')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $listPrice;
    
    /**
     * Reservation lasting period.
     * 
     * @var string $lockTTL
     */
	#[\JMS\Serializer\Annotation\SerializedName('lockTTL')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $lockTTL;
    
	#[\JMS\Serializer\Annotation\SerializedName('pickupStoreInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PickupStoreInfo')]
    public PickupStoreInfo $pickupStoreInfo;
    
    /**
     * Polygon name.
     * 
     * @var string $polygonName
     */
	#[\JMS\Serializer\Annotation\SerializedName('polygonName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $polygonName;
    
    /**
     * Prince in cents.
     * 
     * @var int $price
     */
	#[\JMS\Serializer\Annotation\SerializedName('price')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $price;
    
    /**
     * Selected SLA.
     * 
     * @var string $selectedSla
     */
	#[\JMS\Serializer\Annotation\SerializedName('selectedSla')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $selectedSla;
    
    /**
     * Selling price in cents.
     * 
     * @var int $sellingPrice
     */
	#[\JMS\Serializer\Annotation\SerializedName('sellingPrice')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $sellingPrice;
    
    /**
     * Shipping estimate.
     * 
     * @var string $shippingEstimate
     */
	#[\JMS\Serializer\Annotation\SerializedName('shippingEstimate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $shippingEstimate;
    
    /**
     * Shipping estimate date.
     * 
     * @var string $shippingEstimateDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('shippingEstimateDate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $shippingEstimateDate;
    
    /**
     * List of countries (three letter ISO code) to which shipping is available.
     * 
     * @var array<string> $shipsTo
     */
	#[\JMS\Serializer\Annotation\SerializedName('shipsTo')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $shipsTo;
    
    /**
     * Array with information on the SLAs.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Sla> $slas
     */
	#[\JMS\Serializer\Annotation\SerializedName('slas')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Sla>')]
    public array $slas;
    
	public function __construct()
	{
		$this->addressId = "";
		$this->deliveryChannel = "";
		$this->deliveryCompany = "";
		$this->deliveryIds = [];
		$this->deliveryWindow = "";
		$this->itemIndex = 0;
		$this->listPrice = 0;
		$this->lockTTL = "";
		$this->pickupStoreInfo = new \OpenAPI\OpenAPI\Models\Shared\PickupStoreInfo();
		$this->polygonName = "";
		$this->price = 0;
		$this->selectedSla = "";
		$this->sellingPrice = 0;
		$this->shippingEstimate = "";
		$this->shippingEstimateDate = "";
		$this->shipsTo = [];
		$this->slas = [];
	}
}
