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
exports.PatchUpdateWorkflowResponse = exports.PatchUpdateWorkflowRequest = exports.PatchUpdateWorkflowRequestBody = exports.PatchUpdateWorkflowHeaders = exports.PatchUpdateWorkflowPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchUpdateWorkflowPathParams = /** @class */ (function (_super) {
    __extends(PatchUpdateWorkflowPathParams, _super);
    function PatchUpdateWorkflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workflow_id" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowPathParams.prototype, "workflowId", void 0);
    return PatchUpdateWorkflowPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateWorkflowPathParams = PatchUpdateWorkflowPathParams;
var PatchUpdateWorkflowHeaders = /** @class */ (function (_super) {
    __extends(PatchUpdateWorkflowHeaders, _super);
    function PatchUpdateWorkflowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowHeaders.prototype, "zuoraEntityIds", void 0);
    return PatchUpdateWorkflowHeaders;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateWorkflowHeaders = PatchUpdateWorkflowHeaders;
var PatchUpdateWorkflowRequestBody = /** @class */ (function (_super) {
    __extends(PatchUpdateWorkflowRequestBody, _super);
    function PatchUpdateWorkflowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_trigger" }),
        __metadata("design:type", Boolean)
    ], PatchUpdateWorkflowRequestBody.prototype, "calloutTrigger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interval" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "interval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ondemand_trigger" }),
        __metadata("design:type", Boolean)
    ], PatchUpdateWorkflowRequestBody.prototype, "ondemandTrigger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduled_trigger" }),
        __metadata("design:type", Boolean)
    ], PatchUpdateWorkflowRequestBody.prototype, "scheduledTrigger", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowRequestBody.prototype, "timezone", void 0);
    return PatchUpdateWorkflowRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateWorkflowRequestBody = PatchUpdateWorkflowRequestBody;
var PatchUpdateWorkflowRequest = /** @class */ (function (_super) {
    __extends(PatchUpdateWorkflowRequest, _super);
    function PatchUpdateWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUpdateWorkflowPathParams)
    ], PatchUpdateWorkflowRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUpdateWorkflowHeaders)
    ], PatchUpdateWorkflowRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchUpdateWorkflowRequestBody)
    ], PatchUpdateWorkflowRequest.prototype, "request", void 0);
    return PatchUpdateWorkflowRequest;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateWorkflowRequest = PatchUpdateWorkflowRequest;
var PatchUpdateWorkflowResponse = /** @class */ (function (_super) {
    __extends(PatchUpdateWorkflowResponse, _super);
    function PatchUpdateWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchUpdateWorkflowResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteWorkflowError)
    ], PatchUpdateWorkflowResponse.prototype, "deleteWorkflowError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetWorkflowSetupResponse)
    ], PatchUpdateWorkflowResponse.prototype, "getWorkflowSetupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchUpdateWorkflowResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchUpdateWorkflowResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationErrors)
    ], PatchUpdateWorkflowResponse.prototype, "validationErrors", void 0);
    return PatchUpdateWorkflowResponse;
}(utils_1.SpeakeasyBase));
exports.PatchUpdateWorkflowResponse = PatchUpdateWorkflowResponse;
