const {
  getData
} = require('./curriculumController')();

const Data = require('../model/curriculumModel');

jest.mock('../model/curriculumModel');

describe('getData', () => {
  test('should get curriculum data', async () => {
    const res = {
      json: jest.fn()
    };

    Data.find.mockResolvedValueOnce([{
      title: 'Experience'
    }]);

    await getData(null, res);

    expect(res.json).toHaveBeenCalledWith([{
      title: 'Experience'
    }]);
  });
});
