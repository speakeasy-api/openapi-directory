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
exports.AddBatchWebinarRegistrantsResponse = exports.AddBatchWebinarRegistrantsRequest = exports.AddBatchWebinarRegistrants200ApplicationJson = exports.AddBatchWebinarRegistrants200ApplicationJsonRegistrants = exports.AddBatchWebinarRegistrantsSecurity = exports.AddBatchWebinarRegistrantsRequests = exports.AddBatchWebinarRegistrantsMultipartFormData1 = exports.AddBatchWebinarRegistrantsMultipartFormDataRegistrants = exports.AddBatchWebinarRegistrantsApplicationJson = exports.AddBatchWebinarRegistrantsApplicationJsonRegistrants = exports.AddBatchWebinarRegistrantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddBatchWebinarRegistrantsPathParams = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsPathParams, _super);
    function AddBatchWebinarRegistrantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsPathParams.prototype, "webinarId", void 0);
    return AddBatchWebinarRegistrantsPathParams;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsPathParams = AddBatchWebinarRegistrantsPathParams;
var AddBatchWebinarRegistrantsApplicationJsonRegistrants = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsApplicationJsonRegistrants, _super);
    function AddBatchWebinarRegistrantsApplicationJsonRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsApplicationJsonRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsApplicationJsonRegistrants.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsApplicationJsonRegistrants.prototype, "lastName", void 0);
    return AddBatchWebinarRegistrantsApplicationJsonRegistrants;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsApplicationJsonRegistrants = AddBatchWebinarRegistrantsApplicationJsonRegistrants;
var AddBatchWebinarRegistrantsApplicationJson = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsApplicationJson, _super);
    function AddBatchWebinarRegistrantsApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_approve" }),
        __metadata("design:type", Boolean)
    ], AddBatchWebinarRegistrantsApplicationJson.prototype, "autoApprove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: AddBatchWebinarRegistrantsApplicationJsonRegistrants }),
        __metadata("design:type", Array)
    ], AddBatchWebinarRegistrantsApplicationJson.prototype, "registrants", void 0);
    return AddBatchWebinarRegistrantsApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsApplicationJson = AddBatchWebinarRegistrantsApplicationJson;
var AddBatchWebinarRegistrantsMultipartFormDataRegistrants = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsMultipartFormDataRegistrants, _super);
    function AddBatchWebinarRegistrantsMultipartFormDataRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsMultipartFormDataRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsMultipartFormDataRegistrants.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsMultipartFormDataRegistrants.prototype, "lastName", void 0);
    return AddBatchWebinarRegistrantsMultipartFormDataRegistrants;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsMultipartFormDataRegistrants = AddBatchWebinarRegistrantsMultipartFormDataRegistrants;
var AddBatchWebinarRegistrantsMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsMultipartFormData1, _super);
    function AddBatchWebinarRegistrantsMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=auto_approve" }),
        __metadata("design:type", Boolean)
    ], AddBatchWebinarRegistrantsMultipartFormData1.prototype, "autoApprove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registrants;json=true", elemType: AddBatchWebinarRegistrantsMultipartFormDataRegistrants }),
        __metadata("design:type", Array)
    ], AddBatchWebinarRegistrantsMultipartFormData1.prototype, "registrants", void 0);
    return AddBatchWebinarRegistrantsMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsMultipartFormData1 = AddBatchWebinarRegistrantsMultipartFormData1;
var AddBatchWebinarRegistrantsRequests = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsRequests, _super);
    function AddBatchWebinarRegistrantsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddBatchWebinarRegistrantsApplicationJson)
    ], AddBatchWebinarRegistrantsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddBatchWebinarRegistrantsMultipartFormData1)
    ], AddBatchWebinarRegistrantsRequests.prototype, "object1", void 0);
    return AddBatchWebinarRegistrantsRequests;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsRequests = AddBatchWebinarRegistrantsRequests;
var AddBatchWebinarRegistrantsSecurity = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsSecurity, _super);
    function AddBatchWebinarRegistrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddBatchWebinarRegistrantsSecurity.prototype, "oAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], AddBatchWebinarRegistrantsSecurity.prototype, "bearer", void 0);
    return AddBatchWebinarRegistrantsSecurity;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsSecurity = AddBatchWebinarRegistrantsSecurity;
var AddBatchWebinarRegistrants200ApplicationJsonRegistrants = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrants200ApplicationJsonRegistrants, _super);
    function AddBatchWebinarRegistrants200ApplicationJsonRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrants200ApplicationJsonRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrants200ApplicationJsonRegistrants.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrants200ApplicationJsonRegistrants.prototype, "registrantId", void 0);
    return AddBatchWebinarRegistrants200ApplicationJsonRegistrants;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrants200ApplicationJsonRegistrants = AddBatchWebinarRegistrants200ApplicationJsonRegistrants;
var AddBatchWebinarRegistrants200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrants200ApplicationJson, _super);
    function AddBatchWebinarRegistrants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: AddBatchWebinarRegistrants200ApplicationJsonRegistrants }),
        __metadata("design:type", Array)
    ], AddBatchWebinarRegistrants200ApplicationJson.prototype, "registrants", void 0);
    return AddBatchWebinarRegistrants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrants200ApplicationJson = AddBatchWebinarRegistrants200ApplicationJson;
var AddBatchWebinarRegistrantsRequest = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsRequest, _super);
    function AddBatchWebinarRegistrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddBatchWebinarRegistrantsPathParams)
    ], AddBatchWebinarRegistrantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddBatchWebinarRegistrantsRequests)
    ], AddBatchWebinarRegistrantsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddBatchWebinarRegistrantsSecurity)
    ], AddBatchWebinarRegistrantsRequest.prototype, "security", void 0);
    return AddBatchWebinarRegistrantsRequest;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsRequest = AddBatchWebinarRegistrantsRequest;
var AddBatchWebinarRegistrantsResponse = /** @class */ (function (_super) {
    __extends(AddBatchWebinarRegistrantsResponse, _super);
    function AddBatchWebinarRegistrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddBatchWebinarRegistrantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddBatchWebinarRegistrantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddBatchWebinarRegistrantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddBatchWebinarRegistrants200ApplicationJson)
    ], AddBatchWebinarRegistrantsResponse.prototype, "addBatchWebinarRegistrants200ApplicationJSONObject", void 0);
    return AddBatchWebinarRegistrantsResponse;
}(utils_1.SpeakeasyBase));
exports.AddBatchWebinarRegistrantsResponse = AddBatchWebinarRegistrantsResponse;
