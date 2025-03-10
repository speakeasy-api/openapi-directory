<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ProjectLanguagesDTO
{
    /**
     * $languageCombinations
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto1> $languageCombinations
     */
	#[\JMS\Serializer\Annotation\SerializedName('languageCombinations')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\LanguageCombinationDto1>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $languageCombinations = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sourceLanguageId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $sourceLanguageId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('specializationId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $specializationId = null;
    
    /**
     * $targetLanguageIds
     * 
     * @var ?array<int> $targetLanguageIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('targetLanguageIds')]
    #[\JMS\Serializer\Annotation\Type('array<int>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $targetLanguageIds = null;
    
	public function __construct()
	{
		$this->languageCombinations = null;
		$this->sourceLanguageId = null;
		$this->specializationId = null;
		$this->targetLanguageIds = null;
	}
}
