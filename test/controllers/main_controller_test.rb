require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get site" do
    get main_site_url
    assert_response :success
  end

end
