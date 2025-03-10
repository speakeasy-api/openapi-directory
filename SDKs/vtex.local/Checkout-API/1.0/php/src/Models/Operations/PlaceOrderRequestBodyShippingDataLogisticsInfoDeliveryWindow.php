<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow - In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow
{
    /**
     * Delivery window ending day and time in UTC.
     * 
     * @var ?string $endDateUtc
     */
	#[\JMS\Serializer\Annotation\SerializedName('endDateUtc')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endDateUtc = null;
    
    /**
     * Delivery window list price.
     * 
     * @var ?int $lisPrice
     */
	#[\JMS\Serializer\Annotation\SerializedName('lisPrice')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $lisPrice = null;
    
    /**
     * Delivery window price.
     * 
     * @var ?int $price
     */
	#[\JMS\Serializer\Annotation\SerializedName('price')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $price = null;
    
    /**
     * Delivery window starting day and time in UTC.
     * 
     * @var ?string $startDateUtc
     */
	#[\JMS\Serializer\Annotation\SerializedName('startDateUtc')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startDateUtc = null;
    
    /**
     * Delivery window tax.
     * 
     * @var ?int $tax
     */
	#[\JMS\Serializer\Annotation\SerializedName('tax')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $tax = null;
    
	public function __construct()
	{
		$this->endDateUtc = null;
		$this->lisPrice = null;
		$this->price = null;
		$this->startDateUtc = null;
		$this->tax = null;
	}
}
