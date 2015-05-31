require 'test_helper'

class SearchHistoriesControllerTest < ActionController::TestCase
  setup do
    @search_history = search_histories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:search_histories)
  end

  test "should create search_history" do
    assert_difference('SearchHistory.count') do
      post :create, search_history: { artist: @search_history.artist, user_id: @search_history.user_id }
    end

    assert_response 201
  end

  test "should show search_history" do
    get :show, id: @search_history
    assert_response :success
  end

  test "should update search_history" do
    put :update, id: @search_history, search_history: { artist: @search_history.artist, user_id: @search_history.user_id }
    assert_response 204
  end

  test "should destroy search_history" do
    assert_difference('SearchHistory.count', -1) do
      delete :destroy, id: @search_history
    end

    assert_response 204
  end
end
