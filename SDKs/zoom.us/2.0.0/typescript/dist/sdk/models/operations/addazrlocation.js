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
exports.AddAzrLocationResponse = exports.AddAzrLocationRequest = exports.AddAzrLocation200ApplicationJson = exports.AddAzrLocation200ApplicationJsonTypeEnum = exports.AddAzrLocationSecurity = exports.AddAzrLocationRequests = exports.AddAzrLocationMultipartFormData = exports.AddAzrLocationApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddAzrLocationApplicationJson = /** @class */ (function (_super) {
    __extends(AddAzrLocationApplicationJson, _super);
    function AddAzrLocationApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddAzrLocationApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_location_id" }),
        __metadata("design:type", String)
    ], AddAzrLocationApplicationJson.prototype, "parentLocationId", void 0);
    return AddAzrLocationApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationApplicationJson = AddAzrLocationApplicationJson;
var AddAzrLocationMultipartFormData = /** @class */ (function (_super) {
    __extends(AddAzrLocationMultipartFormData, _super);
    function AddAzrLocationMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], AddAzrLocationMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=parent_location_id" }),
        __metadata("design:type", String)
    ], AddAzrLocationMultipartFormData.prototype, "parentLocationId", void 0);
    return AddAzrLocationMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationMultipartFormData = AddAzrLocationMultipartFormData;
var AddAzrLocationRequests = /** @class */ (function (_super) {
    __extends(AddAzrLocationRequests, _super);
    function AddAzrLocationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddAzrLocationApplicationJson)
    ], AddAzrLocationRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddAzrLocationMultipartFormData)
    ], AddAzrLocationRequests.prototype, "object1", void 0);
    return AddAzrLocationRequests;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationRequests = AddAzrLocationRequests;
var AddAzrLocationSecurity = /** @class */ (function (_super) {
    __extends(AddAzrLocationSecurity, _super);
    function AddAzrLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddAzrLocationSecurity.prototype, "oAuth", void 0);
    return AddAzrLocationSecurity;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationSecurity = AddAzrLocationSecurity;
var AddAzrLocation200ApplicationJsonTypeEnum;
(function (AddAzrLocation200ApplicationJsonTypeEnum) {
    AddAzrLocation200ApplicationJsonTypeEnum["Country"] = "country";
    AddAzrLocation200ApplicationJsonTypeEnum["States"] = "states";
    AddAzrLocation200ApplicationJsonTypeEnum["City"] = "city";
    AddAzrLocation200ApplicationJsonTypeEnum["Campus"] = "campus";
    AddAzrLocation200ApplicationJsonTypeEnum["Building"] = "building";
    AddAzrLocation200ApplicationJsonTypeEnum["Floor"] = "floor";
})(AddAzrLocation200ApplicationJsonTypeEnum = exports.AddAzrLocation200ApplicationJsonTypeEnum || (exports.AddAzrLocation200ApplicationJsonTypeEnum = {}));
var AddAzrLocation200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddAzrLocation200ApplicationJson, _super);
    function AddAzrLocation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddAzrLocation200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddAzrLocation200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_location_id" }),
        __metadata("design:type", String)
    ], AddAzrLocation200ApplicationJson.prototype, "parentLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddAzrLocation200ApplicationJson.prototype, "type", void 0);
    return AddAzrLocation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocation200ApplicationJson = AddAzrLocation200ApplicationJson;
var AddAzrLocationRequest = /** @class */ (function (_super) {
    __extends(AddAzrLocationRequest, _super);
    function AddAzrLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAzrLocationRequests)
    ], AddAzrLocationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAzrLocationSecurity)
    ], AddAzrLocationRequest.prototype, "security", void 0);
    return AddAzrLocationRequest;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationRequest = AddAzrLocationRequest;
var AddAzrLocationResponse = /** @class */ (function (_super) {
    __extends(AddAzrLocationResponse, _super);
    function AddAzrLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddAzrLocationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddAzrLocationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddAzrLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAzrLocation200ApplicationJson)
    ], AddAzrLocationResponse.prototype, "addAZRLocation200ApplicationJSONObject", void 0);
    return AddAzrLocationResponse;
}(utils_1.SpeakeasyBase));
exports.AddAzrLocationResponse = AddAzrLocationResponse;
