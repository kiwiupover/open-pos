class LineItemsController < ApplicationController

	def update
    line_item = LineItems.find(params[:id])
    binding.pry
       # params[:order][:line_items] = params[:order].delete(:line_items) if params[:order].has_key? :line_items
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
