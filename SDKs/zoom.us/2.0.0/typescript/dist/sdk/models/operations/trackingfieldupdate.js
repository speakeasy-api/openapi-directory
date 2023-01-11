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
exports.TrackingfieldUpdateResponse = exports.TrackingfieldUpdateRequest = exports.TrackingfieldUpdateSecurity = exports.TrackingfieldUpdateRequests = exports.TrackingfieldUpdateTrackingField = exports.TrackingfieldUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TrackingfieldUpdatePathParams = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdatePathParams, _super);
    function TrackingfieldUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fieldId" }),
        __metadata("design:type", String)
    ], TrackingfieldUpdatePathParams.prototype, "fieldId", void 0);
    return TrackingfieldUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdatePathParams = TrackingfieldUpdatePathParams;
// TrackingfieldUpdateTrackingField
/**
 * Tracking Field
**/
var TrackingfieldUpdateTrackingField = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdateTrackingField, _super);
    function TrackingfieldUpdateTrackingField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field, multipart_form, name=field" }),
        __metadata("design:type", String)
    ], TrackingfieldUpdateTrackingField.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_values, multipart_form, name=recommended_values;json=true" }),
        __metadata("design:type", Array)
    ], TrackingfieldUpdateTrackingField.prototype, "recommendedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required, multipart_form, name=required" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldUpdateTrackingField.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible, multipart_form, name=visible" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldUpdateTrackingField.prototype, "visible", void 0);
    return TrackingfieldUpdateTrackingField;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdateTrackingField = TrackingfieldUpdateTrackingField;
var TrackingfieldUpdateRequests = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdateRequests, _super);
    function TrackingfieldUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TrackingfieldUpdateTrackingField)
    ], TrackingfieldUpdateRequests.prototype, "trackingField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", TrackingfieldUpdateTrackingField)
    ], TrackingfieldUpdateRequests.prototype, "trackingField1", void 0);
    return TrackingfieldUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdateRequests = TrackingfieldUpdateRequests;
var TrackingfieldUpdateSecurity = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdateSecurity, _super);
    function TrackingfieldUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], TrackingfieldUpdateSecurity.prototype, "oAuth", void 0);
    return TrackingfieldUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdateSecurity = TrackingfieldUpdateSecurity;
var TrackingfieldUpdateRequest = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdateRequest, _super);
    function TrackingfieldUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldUpdatePathParams)
    ], TrackingfieldUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldUpdateRequests)
    ], TrackingfieldUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldUpdateSecurity)
    ], TrackingfieldUpdateRequest.prototype, "security", void 0);
    return TrackingfieldUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdateRequest = TrackingfieldUpdateRequest;
var TrackingfieldUpdateResponse = /** @class */ (function (_super) {
    __extends(TrackingfieldUpdateResponse, _super);
    function TrackingfieldUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TrackingfieldUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TrackingfieldUpdateResponse.prototype, "statusCode", void 0);
    return TrackingfieldUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldUpdateResponse = TrackingfieldUpdateResponse;
