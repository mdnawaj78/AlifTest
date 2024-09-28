import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true, // Ensuring email is unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensuring email is unique
  },
  password: {
    type: String,
    required: function() {
      // Only required for traditional signups (not for OAuth)
      return !this.oauthProvider;
    },
  },
  phone: {
    type: Number,
    required: function() {
      // Only required for traditional signups
      return !this.oauthProvider;
    },
  }, 
  profilePicture: {
    type: String,
    default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  },
  authProvider: {
    type: String, // Set the OAuth provider (e.g., 'google')
    default: null,
  }
}, { timestamps: true });

// Ensure the unique index on email
userSchema.index({ email: 1 }, { unique: true });

// Pre-save validation hook
userSchema.pre('save', function(next) {
  if (!this.authProvider) {
    // Ensure traditional sign-up has required fields
    if (  !this.password ||   !this.email || !this.phone ) {
      return next(new Error('Missing required fields for traditional sign-up.'));
    }
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;