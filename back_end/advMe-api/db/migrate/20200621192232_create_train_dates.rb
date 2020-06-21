class CreateTrainDates < ActiveRecord::Migration[6.0]
  def change
    create_table :train_dates do |t|
      t.string    :date
      t.integer   :count, :null => false, :default => 0
      t.integer   :user_id
      t.timestamps
    end
  end
end
