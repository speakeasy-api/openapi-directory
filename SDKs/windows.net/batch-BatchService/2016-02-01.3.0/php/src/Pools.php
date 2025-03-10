<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Pools 
{

	// SDK private variables namespaced with _ to avoid conflicts with API models
	private \GuzzleHttp\ClientInterface $_defaultClient;
	private \GuzzleHttp\ClientInterface $_securityClient;
	private string $_serverUrl;
	private string $_language;
	private string $_sdkVersion;
	private string $_genVersion;	

	/**
	 * @param \GuzzleHttp\ClientInterface $defaultClient
	 * @param \GuzzleHttp\ClientInterface $securityClient
	 * @param string $serverUrl
	 * @param string $language
	 * @param string $sdkVersion
	 * @param string $genVersion
	 */
	public function __construct(\GuzzleHttp\ClientInterface $defaultClient, \GuzzleHttp\ClientInterface $securityClient, string $serverUrl, string $language, string $sdkVersion, string $genVersion)
	{
		$this->_defaultClient = $defaultClient;
		$this->_securityClient = $securityClient;
		$this->_serverUrl = $serverUrl;
		$this->_language = $language;
		$this->_sdkVersion = $sdkVersion;
		$this->_genVersion = $genVersion;
	}
	
    /**
     * Adds a pool to the specified account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolAddRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolAddResponse
     */
	public function poolAdd(
        \OpenAPI\OpenAPI\Models\Operations\PoolAddRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolAddResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolAddParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolAddRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolAddResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 201) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Deletes a pool from the specified account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolDeleteRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolDeleteResponse
     */
	public function poolDelete(
        \OpenAPI\OpenAPI\Models\Operations\PoolDeleteRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}', \OpenAPI\OpenAPI\Models\Operations\PoolDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolDeleteRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 202) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Disables automatic scaling for a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleResponse
     */
	public function poolDisableAutoScale(
        \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/disableautoscale', \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolDisableAutoScaleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Enables automatic scaling for a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleResponse
     */
	public function poolEnableAutoScale(
        \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/enableautoscale', \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolEnableAutoScaleParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolEnableAutoScaleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets the result of evaluating an automatic scaling formula on the pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleResponse
     */
	public function poolEvaluateAutoScale(
        \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/evaluateautoscale', \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolEvaluateAutoScaleParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolEvaluateAutoScaleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->autoScaleRun = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\AutoScaleRun', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets basic properties of a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolExistsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolExistsResponse
     */
	public function poolExists(
        \OpenAPI\OpenAPI\Models\Operations\PoolExistsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolExistsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}', \OpenAPI\OpenAPI\Models\Operations\PoolExistsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolExistsRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('HEAD', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolExistsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else if ($httpResponse->getStatusCode() === 404) {
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets information about the specified pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolGetRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolGetResponse
     */
	public function poolGet(
        \OpenAPI\OpenAPI\Models\Operations\PoolGetRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}', \OpenAPI\OpenAPI\Models\Operations\PoolGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolGetRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->cloudPool = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CloudPool', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsResponse
     */
	public function poolGetAllPoolsLifetimeStatistics(
        \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/lifetimepoolstats');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolGetAllPoolsLifetimeStatisticsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->poolStatistics = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PoolStatistics', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists all of the pools in the specified account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolListRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolListResponse
     */
	public function poolList(
        \OpenAPI\OpenAPI\Models\Operations\PoolListRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolListRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->cloudPoolListResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CloudPoolListResult', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsResponse
     */
	public function poolListPoolUsageMetrics(
        \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/poolusagemetrics');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolListPoolUsageMetricsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->poolListPoolUsageMetricsResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PoolListPoolUsageMetricsResult', 'json');
            }
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates the properties of a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolPatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolPatchResponse
     */
	public function poolPatch(
        \OpenAPI\OpenAPI\Models\Operations\PoolPatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolPatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}', \OpenAPI\OpenAPI\Models\Operations\PoolPatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolPatchParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolPatchRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolPatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Changes the number of compute nodes that are assigned to a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolResizeRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolResizeResponse
     */
	public function poolResize(
        \OpenAPI\OpenAPI\Models\Operations\PoolResizeRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolResizeResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/resize', \OpenAPI\OpenAPI\Models\Operations\PoolResizeRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolResizeParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolResizeRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolResizeResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 202) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeResponse
     */
	public function poolStopResize(
        \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/stopresize', \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolStopResizeRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolStopResizeResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 202) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates the properties of a pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesResponse
     */
	public function poolUpdateProperties(
        \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/updateproperties', \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolUpdatePropertiesParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolUpdatePropertiesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Upgrades the operating system of the specified pool.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSResponse
     */
	public function poolUpgradeOS(
        \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pools/{poolId}/upgradeos', \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "poolUpgradeOSParameter", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSRequest::class, $request, null));
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PoolUpgradeOSResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 202) {
            $response->headers = $httpResponse->getHeaders();
            
        }
        else {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->batchError = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\BatchError', 'json');
            }
        }

        return $response;
    }
}