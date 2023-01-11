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
exports.AssignSipTrunkNumbersResponse = exports.AssignSipTrunkNumbersRequest = exports.AssignSipTrunkNumbersSecurity = exports.AssignSipTrunkNumbersRequests = exports.AssignSipTrunkNumbersMultipartFormData = exports.AssignSipTrunkNumbersApplicationJson = exports.AssignSipTrunkNumbersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignSipTrunkNumbersPathParams = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersPathParams, _super);
    function AssignSipTrunkNumbersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AssignSipTrunkNumbersPathParams.prototype, "accountId", void 0);
    return AssignSipTrunkNumbersPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersPathParams = AssignSipTrunkNumbersPathParams;
var AssignSipTrunkNumbersApplicationJson = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersApplicationJson, _super);
    function AssignSipTrunkNumbersApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers" }),
        __metadata("design:type", Array)
    ], AssignSipTrunkNumbersApplicationJson.prototype, "phoneNumbers", void 0);
    return AssignSipTrunkNumbersApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersApplicationJson = AssignSipTrunkNumbersApplicationJson;
var AssignSipTrunkNumbersMultipartFormData = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersMultipartFormData, _super);
    function AssignSipTrunkNumbersMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true" }),
        __metadata("design:type", Array)
    ], AssignSipTrunkNumbersMultipartFormData.prototype, "phoneNumbers", void 0);
    return AssignSipTrunkNumbersMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersMultipartFormData = AssignSipTrunkNumbersMultipartFormData;
var AssignSipTrunkNumbersRequests = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersRequests, _super);
    function AssignSipTrunkNumbersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignSipTrunkNumbersApplicationJson)
    ], AssignSipTrunkNumbersRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignSipTrunkNumbersMultipartFormData)
    ], AssignSipTrunkNumbersRequests.prototype, "object1", void 0);
    return AssignSipTrunkNumbersRequests;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersRequests = AssignSipTrunkNumbersRequests;
var AssignSipTrunkNumbersSecurity = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersSecurity, _super);
    function AssignSipTrunkNumbersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AssignSipTrunkNumbersSecurity.prototype, "oAuth", void 0);
    return AssignSipTrunkNumbersSecurity;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersSecurity = AssignSipTrunkNumbersSecurity;
var AssignSipTrunkNumbersRequest = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersRequest, _super);
    function AssignSipTrunkNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunkNumbersPathParams)
    ], AssignSipTrunkNumbersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunkNumbersRequests)
    ], AssignSipTrunkNumbersRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignSipTrunkNumbersSecurity)
    ], AssignSipTrunkNumbersRequest.prototype, "security", void 0);
    return AssignSipTrunkNumbersRequest;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersRequest = AssignSipTrunkNumbersRequest;
var AssignSipTrunkNumbersResponse = /** @class */ (function (_super) {
    __extends(AssignSipTrunkNumbersResponse, _super);
    function AssignSipTrunkNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignSipTrunkNumbersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignSipTrunkNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignSipTrunkNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignSipTrunkNumbersResponse.prototype, "assignSipTrunkNumbers201ApplicationJSONAny", void 0);
    return AssignSipTrunkNumbersResponse;
}(utils_1.SpeakeasyBase));
exports.AssignSipTrunkNumbersResponse = AssignSipTrunkNumbersResponse;
