'use strict'

const targetOptions = {
  major: 'major',
  premajor: 'premajor',
  minor: 'minor',
  preminor: 'preminor',
  patch: 'patch',
  prepatch: 'prepatch',
  prerelease: 'prerelease',
}

const semanticVersionOrder = [
  targetOptions.prerelease,
  targetOptions.prepatch,
  targetOptions.patch,
  targetOptions.preminor,
  targetOptions.minor,
  targetOptions.premajor,
  targetOptions.major,
]

const getTargetInput = input => {
  console.log('getTargetInput params', input)
  return targetOptions[input] || targetOptions.major
}

module.exports = { getTargetInput, targetOptions, semanticVersionOrder }
