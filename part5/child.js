console.log('child~');
process.on('SIGTERM', function() {
  cleanUp();
  process.exit(0);
});

function cleanUp() {
  console.log('end');
}
