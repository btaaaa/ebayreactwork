"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortingOptions = exports.primaryColor = exports.headers = exports.ffParam = exports.defaultErrorMessage = exports.bearer = exports.authorization = exports.allowedMarketplaces = void 0;

/*
 * *
 *  * Copyright 2021 eBay Inc.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *  http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *  *
 */
var primaryColor = '#0063d3';
exports.primaryColor = primaryColor;
var authorization = 'Authorization';
exports.authorization = authorization;
var bearer = 'Bearer ';
exports.bearer = bearer;
var ffParam = '&ff20=020E24670L3R';
exports.ffParam = ffParam;
var defaultErrorMessage = 'No matching items found';
exports.defaultErrorMessage = defaultErrorMessage;
var headers = {
  applicationJson: {
    'Content-Type': 'application/json'
  },
  marketplaceId: 'X-EBAY-C-MARKETPLACE-ID'
};
exports.headers = headers;
var allowedMarketplaces = [{
  name: 'United States',
  id: 'EBAY_US'
}, {
  name: 'Germany',
  id: 'EBAY_DE'
}, {
  name: 'Great Britain',
  id: 'EBAY_GB'
}, {
  name: 'France',
  id: 'EBAY_FR'
}, {
  name: 'Australia',
  id: 'EBAY_AU'
}, {
  name: 'Canada',
  id: 'EBAY_CA'
}, {
  name: 'Spain',
  id: 'EBAY_ES'
}, {
  name: 'Hong Kong',
  id: 'EBAY_HK'
}, {
  name: 'Italy',
  id: 'EBAY_IT'
}, {
  name: 'Singapore',
  id: 'EBAY_SG'
}, {
  name: 'Poland',
  id: 'EBAY_PL'
}, {
  name: 'Ireland',
  id: 'EBAY_IE'
}, {
  name: 'Netherlands',
  id: 'EBAY_NL'
}];
exports.allowedMarketplaces = allowedMarketplaces;
var sortingOptions = [{
  name: 'Best Match',
  id: '-'
}, {
  name: 'Price: Lowest first',
  id: 'price'
}, {
  name: 'Price: Highest first',
  id: '-price'
}, {
  name: 'Time: Newly listed',
  id: 'newlyListed'
}];
exports.sortingOptions = sortingOptions;