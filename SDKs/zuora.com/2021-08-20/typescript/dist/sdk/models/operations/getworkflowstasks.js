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
exports.GetWorkflowsTasksResponse = exports.GetWorkflowsTasksRequest = exports.GetWorkflowsTasksHeaders = exports.GetWorkflowsTasksQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetWorkflowsTasksQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkflowsTasksQueryParams, _super);
    function GetWorkflowsTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=action_type" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "actionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=call_type" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "callType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instance" }),
        __metadata("design:type", Boolean)
    ], GetWorkflowsTasksQueryParams.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object_id" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "objectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetWorkflowsTasksQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_length" }),
        __metadata("design:type", Number)
    ], GetWorkflowsTasksQueryParams.prototype, "pageLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=workflow_id" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksQueryParams.prototype, "workflowId", void 0);
    return GetWorkflowsTasksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetWorkflowsTasksQueryParams = GetWorkflowsTasksQueryParams;
var GetWorkflowsTasksHeaders = /** @class */ (function (_super) {
    __extends(GetWorkflowsTasksHeaders, _super);
    function GetWorkflowsTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetWorkflowsTasksHeaders.prototype, "zuoraTrackId", void 0);
    return GetWorkflowsTasksHeaders;
}(utils_1.SpeakeasyBase));
exports.GetWorkflowsTasksHeaders = GetWorkflowsTasksHeaders;
var GetWorkflowsTasksRequest = /** @class */ (function (_super) {
    __extends(GetWorkflowsTasksRequest, _super);
    function GetWorkflowsTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWorkflowsTasksQueryParams)
    ], GetWorkflowsTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWorkflowsTasksHeaders)
    ], GetWorkflowsTasksRequest.prototype, "headers", void 0);
    return GetWorkflowsTasksRequest;
}(utils_1.SpeakeasyBase));
exports.GetWorkflowsTasksRequest = GetWorkflowsTasksRequest;
var GetWorkflowsTasksResponse = /** @class */ (function (_super) {
    __extends(GetWorkflowsTasksResponse, _super);
    function GetWorkflowsTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetWorkflowsTasksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetWorkflowsTasksResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetWorkflowsTasksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TasksResponse)
    ], GetWorkflowsTasksResponse.prototype, "tasksResponse", void 0);
    return GetWorkflowsTasksResponse;
}(utils_1.SpeakeasyBase));
exports.GetWorkflowsTasksResponse = GetWorkflowsTasksResponse;
