"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRunWorkflowResponse = exports.PostRunWorkflowRequest = exports.PostRunWorkflow409ApplicationJson = exports.PostRunWorkflow406ApplicationJson = exports.PostRunWorkflow400ApplicationJson = exports.PostRunWorkflowHeaders = exports.PostRunWorkflowPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRunWorkflowPathParams = /** @class */ (function (_super) {
    __extends(PostRunWorkflowPathParams, _super);
    function PostRunWorkflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workflow_id" }),
        __metadata("design:type", Number)
    ], PostRunWorkflowPathParams.prototype, "workflowId", void 0);
    return PostRunWorkflowPathParams;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflowPathParams = PostRunWorkflowPathParams;
var PostRunWorkflowHeaders = /** @class */ (function (_super) {
    __extends(PostRunWorkflowHeaders, _super);
    function PostRunWorkflowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostRunWorkflowHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostRunWorkflowHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostRunWorkflowHeaders.prototype, "zuoraTrackId", void 0);
    return PostRunWorkflowHeaders;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflowHeaders = PostRunWorkflowHeaders;
var PostRunWorkflow400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostRunWorkflow400ApplicationJson, _super);
    function PostRunWorkflow400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: shared.WorkflowError }),
        __metadata("design:type", Array)
    ], PostRunWorkflow400ApplicationJson.prototype, "errors", void 0);
    return PostRunWorkflow400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflow400ApplicationJson = PostRunWorkflow400ApplicationJson;
var PostRunWorkflow406ApplicationJson = /** @class */ (function (_super) {
    __extends(PostRunWorkflow406ApplicationJson, _super);
    function PostRunWorkflow406ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: shared.WorkflowError }),
        __metadata("design:type", Array)
    ], PostRunWorkflow406ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", Object)
    ], PostRunWorkflow406ApplicationJson.prototype, "parameters", void 0);
    return PostRunWorkflow406ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflow406ApplicationJson = PostRunWorkflow406ApplicationJson;
var PostRunWorkflow409ApplicationJson = /** @class */ (function (_super) {
    __extends(PostRunWorkflow409ApplicationJson, _super);
    function PostRunWorkflow409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: shared.WorkflowError }),
        __metadata("design:type", Array)
    ], PostRunWorkflow409ApplicationJson.prototype, "errors", void 0);
    return PostRunWorkflow409ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflow409ApplicationJson = PostRunWorkflow409ApplicationJson;
var PostRunWorkflowRequest = /** @class */ (function (_super) {
    __extends(PostRunWorkflowRequest, _super);
    function PostRunWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRunWorkflowPathParams)
    ], PostRunWorkflowRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRunWorkflowHeaders)
    ], PostRunWorkflowRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRunWorkflowRequest.prototype, "request", void 0);
    return PostRunWorkflowRequest;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflowRequest = PostRunWorkflowRequest;
var PostRunWorkflowResponse = /** @class */ (function (_super) {
    __extends(PostRunWorkflowResponse, _super);
    function PostRunWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRunWorkflowResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRunWorkflowResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRunWorkflow400ApplicationJson)
    ], PostRunWorkflowResponse.prototype, "postRunWorkflow400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRunWorkflow406ApplicationJson)
    ], PostRunWorkflowResponse.prototype, "postRunWorkflow406ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRunWorkflow409ApplicationJson)
    ], PostRunWorkflowResponse.prototype, "postRunWorkflow409ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRunWorkflowResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WorkflowInstance)
    ], PostRunWorkflowResponse.prototype, "workflowInstance", void 0);
    return PostRunWorkflowResponse;
}(utils_1.SpeakeasyBase));
exports.PostRunWorkflowResponse = PostRunWorkflowResponse;
