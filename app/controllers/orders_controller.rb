class OrdersController < ApplicationController

  def index
    open_orders = Order.all_open
    order = (open_orders.first if open_orders.size > 0) || Order.create
    render json: open_orders
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
    params[:order][:line_items_attributes] = params[:order].delete(:line_items) if params[:order].has_key? :line_items
    order = Order.new(params[:order])
    if order.save
      render json: order, status: :created
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def update
    order = Order.find(params[:id])
    params[:order][:line_items_attributes] = params[:order].delete(:line_items) if params[:order].has_key? :line_items

    remove_missing_line_items(order,params) if params[:order][:line_items_attributes]
    order.reload
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

  def current
      open_orders = Order.all_open
      order = (open_orders.first if open_orders.size > 0) || Order.create
    if request.put?
      order = open_orders.first
      params[:order][:line_items_attributes] = params[:order].delete(:line_items) if params[:order].has_key? :line_items
      if order.update_attributes(params[:order])
        render json: order, status: :ok and return
      else
        render json: order.errors, status: :unprocessable_entity and return
      end
    else
      render json: order and return
    end

  end

  private

  def remove_missing_line_items(order,params)
    line_ids = order.line_items.map &:id
    keep_ids = params[:order][:line_items_attributes].map{ |i| i[:id].to_i }
    ids_to_delete = line_ids-keep_ids
    order.line_items.find(ids_to_delete).map &:delete
  end

end
