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
exports.EndUserRoute = void 0;
var utils_1 = require("../../../internal/utils");
var did_1 = require("./did");
var line_1 = require("./line");
var basicuser_1 = require("./basicuser");
var EndUserRoute = /** @class */ (function (_super) {
    __extends(EndUserRoute, _super);
    function EndUserRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_caller_id" }),
        __metadata("design:type", Boolean)
    ], EndUserRoute.prototype, "blockCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_id" }),
        __metadata("design:type", String)
    ], EndUserRoute.prototype, "callerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dids", elemType: did_1.Did }),
        __metadata("design:type", Array)
    ], EndUserRoute.prototype, "dids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnd_enabled" }),
        __metadata("design:type", Boolean)
    ], EndUserRoute.prototype, "dndEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_handsets", elemType: line_1.Line }),
        __metadata("design:type", Array)
    ], EndUserRoute.prototype, "extensionHandsets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], EndUserRoute.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", Number)
    ], EndUserRoute.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", basicuser_1.BasicUser)
    ], EndUserRoute.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vtt_enabled" }),
        __metadata("design:type", Boolean)
    ], EndUserRoute.prototype, "vttEnabled", void 0);
    return EndUserRoute;
}(utils_1.SpeakeasyBase));
exports.EndUserRoute = EndUserRoute;
