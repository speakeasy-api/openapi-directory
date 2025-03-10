<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DestroyCallResponse
{
    /**
     * Successful
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Call> $calls
     */
	
    public ?array $calls = null;
    
	
    public string $contentType;
    
    /**
     * Bad Request: The client should not repeat the request without modifications
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->calls = null;
		$this->contentType = "";
		$this->errorResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
