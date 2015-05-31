require 'rails_helper'

RSpec.describe SearchHistoriesController, type: :controller do
    describe "GET index" do
      it "should be success" do
        get :index
        expect(response).to be_success
      end
    end
    describe "Search History create" do

      it "should create search history" do
        post :create,{search_history: {artist: 'drake', user_id: '1'}}
        expect(response).to be_success
      end

    end
end