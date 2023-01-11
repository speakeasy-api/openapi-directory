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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TspResponse = exports.Tsp200ApplicationJson = exports.Tsp200ApplicationJsonTspBridgeEnum = exports.Tsp200ApplicationJsonDialInNumbers = void 0;
var utils_1 = require("../../../internal/utils");
var Tsp200ApplicationJsonDialInNumbers = /** @class */ (function (_super) {
    __extends(Tsp200ApplicationJsonDialInNumbers, _super);
    function Tsp200ApplicationJsonDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Tsp200ApplicationJsonDialInNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], Tsp200ApplicationJsonDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Tsp200ApplicationJsonDialInNumbers.prototype, "type", void 0);
    return Tsp200ApplicationJsonDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.Tsp200ApplicationJsonDialInNumbers = Tsp200ApplicationJsonDialInNumbers;
var Tsp200ApplicationJsonTspBridgeEnum;
(function (Tsp200ApplicationJsonTspBridgeEnum) {
    Tsp200ApplicationJsonTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    Tsp200ApplicationJsonTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(Tsp200ApplicationJsonTspBridgeEnum = exports.Tsp200ApplicationJsonTspBridgeEnum || (exports.Tsp200ApplicationJsonTspBridgeEnum = {}));
var Tsp200ApplicationJson = /** @class */ (function (_super) {
    __extends(Tsp200ApplicationJson, _super);
    function Tsp200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_number_unrestricted" }),
        __metadata("design:type", Boolean)
    ], Tsp200ApplicationJson.prototype, "dialInNumberUnrestricted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_numbers", elemType: Tsp200ApplicationJsonDialInNumbers }),
        __metadata("design:type", Array)
    ], Tsp200ApplicationJson.prototype, "dialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Tsp200ApplicationJson.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=master_account_setting_extended" }),
        __metadata("design:type", Boolean)
    ], Tsp200ApplicationJson.prototype, "masterAccountSettingExtended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modify_credential_forbidden" }),
        __metadata("design:type", Boolean)
    ], Tsp200ApplicationJson.prototype, "modifyCredentialForbidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], Tsp200ApplicationJson.prototype, "tspBridge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_enabled" }),
        __metadata("design:type", Boolean)
    ], Tsp200ApplicationJson.prototype, "tspEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_provider" }),
        __metadata("design:type", String)
    ], Tsp200ApplicationJson.prototype, "tspProvider", void 0);
    return Tsp200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tsp200ApplicationJson = Tsp200ApplicationJson;
var TspResponse = /** @class */ (function (_super) {
    __extends(TspResponse, _super);
    function TspResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], TspResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TspResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TspResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tsp200ApplicationJson)
    ], TspResponse.prototype, "tsp200ApplicationJSONObject", void 0);
    return TspResponse;
}(utils_1.SpeakeasyBase));
exports.TspResponse = TspResponse;
