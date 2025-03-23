const {getUserName} = require("../../api/v1/controllers/user.js");
const userService = require("../../api/v1/services/user.js");

describe("user controller", () => {
  const mockReq = {};
  const mockRes = {};
  describe("getUsername", () => {
    it("should get correct username", async () => {
      mockReq.body = {
        userId: "dummy_id",
      };
      mockRes.status = jest.fn().mockReturnValue(mockRes);
      mockRes.json = jest.fn().mockReturnValue(mockRes);

      const serviceSpy = jest
        .spyOn(userService, "getUserById")
        .mockImplementation()
        .mockResolvedValue("dummy_name");

      await getUserName(mockReq, mockRes);
      //   expect(mockRes.name).toBe("dummy_name");
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        username: "dummy_name",
      });
      expect(serviceSpy).toHaveBeenCalled();
    });
  });
});
