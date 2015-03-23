class BookingSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :date, :address, :lat, :lon, :complete

  def time
    object.time.strftime('%l:%M %p')
  end

  def date
    object.time.strftime('%A, %B %d, %Y')
  end
end