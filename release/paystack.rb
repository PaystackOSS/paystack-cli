# Documentation: https://docs.brew.sh/Formula-Cookbook
#                https://rubydoc.brew.sh/Formula
# PLEASE REMOVE ALL GENERATED COMMENTS BEFORE SUBMITTING YOUR PULL REQUEST!
class PaystackV100Nightly0B83d862DarwinX < Formula
    desc ""
    homepage ""
    url "https://public-paystack-cli.s3.eu-west-1.amazonaws.com/versions/1.0.0-nightly.0/b83d862/paystack-v1.0.0-nightly.0-b83d862-darwin-x64.tar.gz"
    sha256 "b32e4ee30ce9525f6eb4ccfa0b6dc2b2d607ed0e390c7378f365d8c009e965d2"
    license ""
  
    # depends_on "cmake" => :build
  
    def install
      # ENV.deparallelize  # if your formula fails when building in parallel
      # Remove unrecognized options if warned by configure
      # https://rubydoc.brew.sh/Formula.html#std_configure_args-instance_method
      system "./configure", *std_configure_args, "--disable-silent-rules"
      # system "cmake", "-S", ".", "-B", "build", *std_cmake_args
    end
  
    test do
      # `test do` will create, run in and delete a temporary directory.
      #
      # This test will fail and we won't accept that! For Homebrew/homebrew-core
      # this will need to be a test that verifies the functionality of the
      # software. Run the test with `brew test paystack-v1.0.0-nightly.0-b83d862-darwin-x`. Options passed
      # to `brew install` such as `--HEAD` also need to be provided to `brew test`.
      #
      # The installed folder is not in the path, so use the entire path to any
      # executables being tested: `system "#{bin}/program", "do", "something"`.
      system "false"
    end
  end