class SearchHistoriesController < ApplicationController

  #before_action :authenticate_user!

  def index
    @search_histories = SearchHistory.all
    render json: @search_histories
  end

  def create
    @search_history = SearchHistory.new(search_history_params)
    if @search_history.save
      render json: @search_history
    else
      render json: @search_history.errors.full_messages
    end
  end

  private
    def search_history_params
      params.require(:search_history).permit(:artist, :user_id)
    end
end
