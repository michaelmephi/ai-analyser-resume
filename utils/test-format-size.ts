import { formatSize } from './index';

// Test cases
const testCases = [
  { bytes: 0, expected: '0 Bytes' },
  { bytes: 500, expected: '500 Bytes' },
  { bytes: 1023, expected: '1023 Bytes' },
  { bytes: 1024, expected: '1 KB' },
  { bytes: 1500, expected: '1.46 KB' },
  { bytes: 1024 * 1024, expected: '1 MB' },
  { bytes: 1.5 * 1024 * 1024, expected: '1.5 MB' },
  { bytes: 1024 * 1024 * 1024, expected: '1 GB' },
  { bytes: 2.5 * 1024 * 1024 * 1024, expected: '2.5 GB' },
];

// Run tests
console.log('Testing formatSize function:');
testCases.forEach(({ bytes, expected }) => {
  const result = formatSize(bytes);
  const passed = result === expected;
  console.log(`${passed ? '✓' : '✗'} ${bytes} bytes => ${result} ${!passed ? `(expected: ${expected})` : ''}`);
});

// This is just a test file, not meant to be run in the browser
// To run this test, you would use: npx ts-node utils/test-format-size.ts