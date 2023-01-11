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
exports.ChangeParentLocationResponse = exports.ChangeParentLocationRequest = exports.ChangeParentLocationSecurity = exports.ChangeParentLocationRequests = exports.ChangeParentLocationMultipartFormData = exports.ChangeParentLocationApplicationJson = exports.ChangeParentLocationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChangeParentLocationPathParams = /** @class */ (function (_super) {
    __extends(ChangeParentLocationPathParams, _super);
    function ChangeParentLocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locationId" }),
        __metadata("design:type", String)
    ], ChangeParentLocationPathParams.prototype, "locationId", void 0);
    return ChangeParentLocationPathParams;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationPathParams = ChangeParentLocationPathParams;
var ChangeParentLocationApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeParentLocationApplicationJson, _super);
    function ChangeParentLocationApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_location_id" }),
        __metadata("design:type", String)
    ], ChangeParentLocationApplicationJson.prototype, "parentLocationId", void 0);
    return ChangeParentLocationApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationApplicationJson = ChangeParentLocationApplicationJson;
var ChangeParentLocationMultipartFormData = /** @class */ (function (_super) {
    __extends(ChangeParentLocationMultipartFormData, _super);
    function ChangeParentLocationMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=parent_location_id" }),
        __metadata("design:type", String)
    ], ChangeParentLocationMultipartFormData.prototype, "parentLocationId", void 0);
    return ChangeParentLocationMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationMultipartFormData = ChangeParentLocationMultipartFormData;
var ChangeParentLocationRequests = /** @class */ (function (_super) {
    __extends(ChangeParentLocationRequests, _super);
    function ChangeParentLocationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeParentLocationApplicationJson)
    ], ChangeParentLocationRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ChangeParentLocationMultipartFormData)
    ], ChangeParentLocationRequests.prototype, "object1", void 0);
    return ChangeParentLocationRequests;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationRequests = ChangeParentLocationRequests;
var ChangeParentLocationSecurity = /** @class */ (function (_super) {
    __extends(ChangeParentLocationSecurity, _super);
    function ChangeParentLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ChangeParentLocationSecurity.prototype, "oAuth", void 0);
    return ChangeParentLocationSecurity;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationSecurity = ChangeParentLocationSecurity;
var ChangeParentLocationRequest = /** @class */ (function (_super) {
    __extends(ChangeParentLocationRequest, _super);
    function ChangeParentLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeParentLocationPathParams)
    ], ChangeParentLocationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeParentLocationRequests)
    ], ChangeParentLocationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeParentLocationSecurity)
    ], ChangeParentLocationRequest.prototype, "security", void 0);
    return ChangeParentLocationRequest;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationRequest = ChangeParentLocationRequest;
var ChangeParentLocationResponse = /** @class */ (function (_super) {
    __extends(ChangeParentLocationResponse, _super);
    function ChangeParentLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ChangeParentLocationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChangeParentLocationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChangeParentLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChangeParentLocationResponse.prototype, "changeParentLocation204ApplicationJSONAny", void 0);
    return ChangeParentLocationResponse;
}(utils_1.SpeakeasyBase));
exports.ChangeParentLocationResponse = ChangeParentLocationResponse;
