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
exports.AddARoomResponse = exports.AddARoomRequest = exports.AddARoom201ApplicationJson = exports.AddARoom201ApplicationJsonTypeEnum = exports.AddARoomSecurity = exports.AddARoomRequests = exports.AddARoomMultipartFormData = exports.AddARoomMultipartFormDataTypeEnum = exports.AddARoomApplicationJson = exports.AddARoomApplicationJsonTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddARoomApplicationJsonTypeEnum;
(function (AddARoomApplicationJsonTypeEnum) {
    AddARoomApplicationJsonTypeEnum["ZoomRoom"] = "ZoomRoom";
    AddARoomApplicationJsonTypeEnum["SchedulingDisplayOnly"] = "SchedulingDisplayOnly";
    AddARoomApplicationJsonTypeEnum["DigitalSignageOnly"] = "DigitalSignageOnly";
})(AddARoomApplicationJsonTypeEnum = exports.AddARoomApplicationJsonTypeEnum || (exports.AddARoomApplicationJsonTypeEnum = {}));
var AddARoomApplicationJson = /** @class */ (function (_super) {
    __extends(AddARoomApplicationJson, _super);
    function AddARoomApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], AddARoomApplicationJson.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddARoomApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddARoomApplicationJson.prototype, "type", void 0);
    return AddARoomApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddARoomApplicationJson = AddARoomApplicationJson;
var AddARoomMultipartFormDataTypeEnum;
(function (AddARoomMultipartFormDataTypeEnum) {
    AddARoomMultipartFormDataTypeEnum["ZoomRoom"] = "ZoomRoom";
    AddARoomMultipartFormDataTypeEnum["SchedulingDisplayOnly"] = "SchedulingDisplayOnly";
    AddARoomMultipartFormDataTypeEnum["DigitalSignageOnly"] = "DigitalSignageOnly";
})(AddARoomMultipartFormDataTypeEnum = exports.AddARoomMultipartFormDataTypeEnum || (exports.AddARoomMultipartFormDataTypeEnum = {}));
var AddARoomMultipartFormData = /** @class */ (function (_super) {
    __extends(AddARoomMultipartFormData, _super);
    function AddARoomMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=location_id" }),
        __metadata("design:type", String)
    ], AddARoomMultipartFormData.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], AddARoomMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AddARoomMultipartFormData.prototype, "type", void 0);
    return AddARoomMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddARoomMultipartFormData = AddARoomMultipartFormData;
var AddARoomRequests = /** @class */ (function (_super) {
    __extends(AddARoomRequests, _super);
    function AddARoomRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddARoomApplicationJson)
    ], AddARoomRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddARoomMultipartFormData)
    ], AddARoomRequests.prototype, "object1", void 0);
    return AddARoomRequests;
}(utils_1.SpeakeasyBase));
exports.AddARoomRequests = AddARoomRequests;
var AddARoomSecurity = /** @class */ (function (_super) {
    __extends(AddARoomSecurity, _super);
    function AddARoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddARoomSecurity.prototype, "oAuth", void 0);
    return AddARoomSecurity;
}(utils_1.SpeakeasyBase));
exports.AddARoomSecurity = AddARoomSecurity;
var AddARoom201ApplicationJsonTypeEnum;
(function (AddARoom201ApplicationJsonTypeEnum) {
    AddARoom201ApplicationJsonTypeEnum["ZoomRoom"] = "ZoomRoom";
    AddARoom201ApplicationJsonTypeEnum["SchedulingDisplayOnly"] = "SchedulingDisplayOnly";
    AddARoom201ApplicationJsonTypeEnum["DigitalSignageOnly"] = "DigitalSignageOnly";
})(AddARoom201ApplicationJsonTypeEnum = exports.AddARoom201ApplicationJsonTypeEnum || (exports.AddARoom201ApplicationJsonTypeEnum = {}));
var AddARoom201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddARoom201ApplicationJson, _super);
    function AddARoom201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddARoom201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], AddARoom201ApplicationJson.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddARoom201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_id" }),
        __metadata("design:type", String)
    ], AddARoom201ApplicationJson.prototype, "roomId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddARoom201ApplicationJson.prototype, "type", void 0);
    return AddARoom201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddARoom201ApplicationJson = AddARoom201ApplicationJson;
var AddARoomRequest = /** @class */ (function (_super) {
    __extends(AddARoomRequest, _super);
    function AddARoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddARoomRequests)
    ], AddARoomRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddARoomSecurity)
    ], AddARoomRequest.prototype, "security", void 0);
    return AddARoomRequest;
}(utils_1.SpeakeasyBase));
exports.AddARoomRequest = AddARoomRequest;
var AddARoomResponse = /** @class */ (function (_super) {
    __extends(AddARoomResponse, _super);
    function AddARoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddARoomResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddARoomResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddARoomResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddARoom201ApplicationJson)
    ], AddARoomResponse.prototype, "addARoom201ApplicationJSONObject", void 0);
    return AddARoomResponse;
}(utils_1.SpeakeasyBase));
exports.AddARoomResponse = AddARoomResponse;
