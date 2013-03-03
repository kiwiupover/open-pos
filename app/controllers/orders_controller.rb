class OrdersController < ApplicationController

  def index
    orders = Order.all
    render json: orders
  end

	def show
    order = Order.find(params[:id])
    render json: order
  end

  def receipt
    @order = Order.find(params[:id])
  end

  def thanks #TEMPORARY
    @order = Order.find(params[:id])
  end

  def create
    order = Order.new(params[:order])
    if order.save
      render json: order, status: :created
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def update
    order = Order.find(params[:id])
    if order.update_attributes(params[:order])
      render json: order, status: :ok
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def remove_item
    order = Order.find(params[:id])
    order.line_items.where(product_id: params[:product_id]).delete_all
    render json: nil, status: :ok
  end

  def destroy
    order = Order.find(params[:id])
    order.destroy
    render json: nil, status: :ok
  end

end
