// This file is required by jest.config.ts and is a great place to add instructions before running tests
import '@testing-library/jest-dom';
import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../../.env.test') });