<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class BannersBanners
{
    /**
     * Banner area.
     * 
     * @var ?string $area
     */
	#[\JMS\Serializer\Annotation\SerializedName('area')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $area = null;
    
    /**
     * Banner HTML.
     * 
     * @var ?string $html
     */
	#[\JMS\Serializer\Annotation\SerializedName('html')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $html = null;
    
    /**
     * Banner id.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Banner name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->area = null;
		$this->html = null;
		$this->id = null;
		$this->name = null;
	}
}
