class LineItemsController < ApplicationController

  def index
    line_items = LineItem.find(params[:ids])
    render json: line_items
  end

  def show
    line_item = LineItem.find(params[:id])
    render json: line_item
  end

  def update
    line_item = LineItem.find(params[:id])
    if line_item.update_attributes(params[:line_item])
      render json: line_item, status: :ok
    else
      render json: line_item.errors, status: :unprocessable_entity
    end
  end

  def create
  	order = Order.first
  	line = order.line_items.create params[:line_item]
  	render json: line, status: :ok
  end
end
